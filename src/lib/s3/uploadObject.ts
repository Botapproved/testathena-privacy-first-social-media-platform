import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is missing. Make sure to set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_KEY environment variables.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadObject(
  file: Buffer,
  fileName: string,
  type: string,
) {
  try {
    const { data, error } = await supabase.storage
      .from('hackathena') // Replace 'your_bucket_name' with your actual bucket name in Supabase
      .upload(fileName, file, {
        contentType: type,
      });

    if (error) {
      throw error;
    }

    console.log('File uploaded successfully:', data);
  } catch (error: any) {
    console.error('Error uploading file:', error.message);
    throw error;
  }
}

