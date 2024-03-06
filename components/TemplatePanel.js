import { SidePanel } from '@supabase/ui';
import React from 'react'

export const TemplatePanel = ({
    templates = [],
    showTemplatesPanel = false,
    hideTemplatesPanel = () => {},
    onFileUpload = () => {},
}) => {
    return (
        <SidePanel visible={showTemplatesPanel} onCancel={hideTemplatesPanel}>
            <div>
                <input type="file" onChange={onFileUpload} />
            </div>
        </SidePanel>
    )
}
export default TemplatePanel;