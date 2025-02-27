import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqaluvsaxhdiultpaqnl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YXJhZWRrd2pnc3BrbmltbWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjI4MTgsImV4cCI6MjA1MjMzODgxOH0.6GEOM6YASqLMdFYTmNW7ceebdOKKxtVMQjUqlm8VWWg"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    const {data: contact, error} = await supabase.from("contacto").select("*").eq("id",id).single()

return new Response(JSON.stringify(contact), {status: 200})
}