<div class="footer">
	<div class="item-left">
		<p>Arya "Dee" Daroui</p>
		<p><a href="mailto: adaroui@uci.edu">adaroui@uci.edu</a></p>
		<!-- <p>
			<a href="https://github.com/aryadaroui"><img src="/github-icon.svg" alt="github icon" /></a>
			<a href="https://www.linkedin.com/in/aryadaroui/"><img src="/linkedin-icon.svg" alt="linkedin icon" /></a>
			<a href="https://www.instagram.com/aryadee/"><img src="/instagram-icon.svg" alt="github icon" /></a>
		</p> -->
	</div>

	<div class="item-right">
		<p>a person from planet Earth</p>
		<!-- <p><a href="/about">about me</a></p> -->
		<p><a href="/privacy-and-copyright">privacy & copyright</a></p>
	</div>
</div>

<style>
	p a img {
		height: 1.3em;
		fill: #00b8eb;
		padding-right: 1.0em;
	}

	p a img :hover {
		text-shadow: #ebf0f2 0 0 20px;
	}

	p {
		color: #cccccc;
		/* font-size: small; */
		font-size: 1.05em;
		font-weight: 200;
	}

	p a {
		font-family: Hack, monospace;
		font-size: 0.9em;
		/* font-family: 'Swiss 721'; */
		/* font-weight: 300; */
	}

	.item-left {
		text-align: left;
		padding: 0px;
	}

	.item-right {
		text-align: right;
		padding: 0px;
	}


	@keyframes footer-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	
	.footer {
		padding: 20px;
		margin-left: auto;
		margin-right: auto;
		max-width: 800px;
		display: flex;
		justify-content: space-between;
		/* margin-bottom: 0px; */
		animation: 1s ease-in-out normal footer-fade-in;
		z-index: 10;
	}
</style>
