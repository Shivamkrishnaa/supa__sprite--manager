import Head from 'next/head'
import { Typography } from '@supabase/ui';
import Editor from '../components/Editor';
import TemplatePanel from '../components/TemplatePanel';
import { useState } from 'react';
import { getTemplates } from '../utils/supaclient';
import { useEffect } from 'react';
export default function Home() {
  const [templates, setTemplates] = useState([])
  const [showTemplatesPanel, setShowTemplatesPanel] = useState(false);
  useEffect(() => {
    const initAssets = async() => {
      const templates = await getTemplates();
      setTemplates(templates);
    }
    initAssets();
  }, [])
  
  return (
    <div className="h-screen bg-gray-800 space-y-3">
      <Head>
        <title>Sprite Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/fonts.css" />
      </Head>
      <nav className='border-b border-gray-600 text-sm p-3 text-white' >
        <a href="/">Home</a>
      </nav>
      <main className='flex flex-col items-center text-center'>
        <div className='flex flex-col py-8'>
          <Typography.Title level={2}> Sprites </Typography.Title>
          <Typography> Preview sprites - so here's a microfrontend to preview sprites </Typography>
        </div>
        <Editor
          onSelectChangeTemplate={() => setShowTemplatesPanel(true)}
        />
        <TemplatePanel
          hideTemplatesPanel={() => setShowTemplatesPanel(false)}
          showTemplatesPanel={showTemplatesPanel}
        />
      </main>
      <footer className=" text-center text-white border-t border-gray-600">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by CR7
        </a>
      </footer>
    </div>
  )
}
