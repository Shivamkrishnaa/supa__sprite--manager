import { createClient } from '@supabase/supabase-js'

const TEMPLATES_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_TEMPLATES_BUCKET
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPAB;


const supabase = ()=>createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


export const getSignedUrl = async (bucket, prefix) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(prefix, DEFAULT_EXPIRY)
    if (error) {
      console.warn('Error', error)
      return ''
    }
    return data.signedURL
  }

  
export const getTemplates = async() => {
    const { data } = await supabase
    // .from('templates')
    // .select()
    // const res = await Promise.all(
        //   data.map(async (template) => {
            //     const signedUrl = await getSignedUrl(TEMPLATES_BUCKET, template.path)
            //     return { ...template, url: signedUrl }
            //   })
            // )
            // console.log('data :', data);
    // return res
  }
  