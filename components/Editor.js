import { Button, Dropdown, Input, Typography } from '@supabase/ui';
import React from 'react'
import * as R from 'ramda'
import { useState } from 'react';
const EDITOR_DIMENSIONS = { width: 800, height: 450 }

export const Editor = ({ onSelectChangeTemplate = () => { }, stickers = [{ name: "Shivam", id: 1 }] }) => {
console.log('stickers :', stickers);
    const [name, setName] = useState('');
    const onSaveSprite = () => { };
    const onExportSprite = () => { };

    return (
        <div className='space-y-3'>
            <div className='flex flex-row items-center justify-between'>
                <div>

                </div>
                <div className='flex flex-row items-center space-x-2'>
                <Dropdown overlay={R.map((sticker) => (
                    <Dropdown.Item key={sticker.id}>
                        <div>
                            <Typography.Text>{sticker.name}</Typography.Text>
                        </div>
                    </Dropdown.Item>
                ), stickers)}>
                  <img className="h-5" src="/img/sticker.svg" />
                </Dropdown>
                <Button type="secondary" onClick={onSelectChangeTemplate}>Change Template</Button>
                </div>
            </div>
            <div className='border border-gray-500 rounded-md'>
                <canvas id="editor" width={EDITOR_DIMENSIONS.width} height={EDITOR_DIMENSIONS.height} />
            </div>
            <div className='flex flex-row items-center justify-between'>
                <Input className='w-64' placeholder='Name your sprite' value={name} onChange={(e) => setName(e.target.value)} />
                <div className='space-x-4'>
                    <Button type="primary" onClick={onSaveSprite}> Save Sprite </Button>
                    <Button type="primary" onClick={onExportSprite}> Export Sprite </Button>
                </div>
            </div>
        </div>
    )
}
export default Editor;