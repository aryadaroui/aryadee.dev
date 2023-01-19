import { createClient } from '@supabase/supabase-js'
import { PUBLIC_API_KEY, PUBLIC_DB_URL } from '$env/static/public';

export async function load({ getClientAddress }) {
	const ip = getClientAddress();

	// const supabaseKey = process.env.SUPABASE_KEY
	const supabase = createClient(PUBLIC_DB_URL, PUBLIC_API_KEY)

// 	const { data, error } = await supabase
//   .from('test-table')
//   .insert([
// 	{ id: 3},
//   ])

	// console.log(ip);
	// console.log(data);
	// console.log(error);
}
