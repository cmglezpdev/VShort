import { createClient, PostgrestError } from '@supabase/supabase-js';
import { VideoInfo } from '../Interfaces/VideoInfo';


const supabaseUrl = 'https://ybgihywrplmnblnqvyqm.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


export const supabase = createClient(supabaseUrl, supabaseKey)

export const getVideos = async () => {
    let { data: videos, error } = await supabase
    .from('videos')
    .select(`*, user:users(
        avatar,
        username
    )`)
    return [error as PostgrestError, videos as VideoInfo[]];
}