#!/Users/aryadaroui/miniconda3/envs/main/bin/python

import os
import sys
import markdown
import re
from pathlib import Path
import subprocess
from distutils.dir_util import copy_tree

def replace_block_math(md_string):
	return re.sub(r'<p>\$\$\n?([\s\S]*?)\n?\$\$</p>', r'{@html display("\1")}', md_string)

def replace_inline_math(md_string):
	return re.sub(r'\$(.*?)\$', r'{@html math("\1")}', md_string)

def replace_code_lang(md_string):
	return re.sub(r'```(.*?)\n', r'class="language-\1"', md_string)

def double_math_slashes(md_string):
	return re.sub(r'\${1,2}\n?([\s\S]*?)\n?\${1,2}', lambda x:x.group(0).replace('\\', '\\\\').replace('\n', '').replace('<em>', '_').replace('</em>', '_'), md_string )

def redirect_image_paths(html_string, infile):
	return html_string.replace('src="' + infile.stem + '_files', 'src="' + '/blog/' + infile.stem)

def md_to_html(md_string):
	md = double_math_slashes(md_string) # need to do it before. the markdown converter removes
	html = markdown.markdown(md, extensions=['extra'])
	html = double_math_slashes(html)
	html = replace_block_math(html)
	html = replace_inline_math(html)
	# print(html)
	# html = replace_code_lang(html)
	# print(html)
	# html = start_html + html + end_html
	return html

start_html = '''
<script>
	import { math, display } from 'mathlifier';
</script>

<title>aryadee | blog </title>

'''

end_html = '''
<style>
img {
	max-width: 100%;
    height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>
'''

target_page_path = './src/routes/(pages)/blog/'
target_asset_path = './static/blog/'

if __name__ == "__main__":

	infile = Path(sys.argv[1])
	# infile = Path(r'/Users/aryadaroui/Desktop/blog post on curves/filmic-devblog0-tone-curve-and-color-response.ipynb') # for debug

	if not infile.exists():
		raise FileExistsError( str(infile) + ' does not exist.')

	if infile.suffix != '.ipynb' and infile.suffix != '.md':
		raise NameError('file format must be .md or .ipynb, not: ' + infile.suffix)

	new_asset_path = target_asset_path + infile.stem + '/'
	if not os.path.exists(new_asset_path):
		os.makedirs(new_asset_path)

	if infile.suffix == '.ipynb':
		shell = subprocess.Popen('/bin/zsh', stdin=subprocess.PIPE, stdout=subprocess.PIPE)

		shell.communicate(bytes(
			'jupyter nbconvert --to markdown ' + str(infile).replace(' ', '\ '),
			encoding='ascii'
		))

		jupyter_convert_path = infile.parent

		with open(jupyter_convert_path / (infile.stem + '.md')) as md_file:
			md = md_file.read()
			html = md_to_html(md)
			html = redirect_image_paths(html, infile)

		copy_tree(jupyter_convert_path / (infile.stem + '_files/'), new_asset_path)
	elif infile.suffix == '.md':
		with open(infile) as md_file:
			md = md_file.read()
			html = md_to_html(md)
		
	html = start_html + html + end_html

	print("\033[94m" + "\nDon't forget to transfer the images" + "\033[0m")

	new_page_path = target_page_path + infile.stem
	if not os.path.exists(new_page_path):
		os.makedirs(new_page_path)

	with open(new_page_path + '/+page.svelte', 'w') as file:
		file.write(html)
