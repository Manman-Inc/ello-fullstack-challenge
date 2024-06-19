import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children, id = 'portal-root', ...props }) => {
    const [portalRoot, setPortalRoot] = useState(null);

    useEffect(() => {
        let root = document.getElementById(id);
        if (!root) {
            root = document.createElement('div');
            root.id = id;
            document.body.appendChild(root);
        }
        setPortalRoot(root);
    }, [id]);

    if (!portalRoot) return null;

    return ReactDOM.createPortal(<div {...props}>{children}</div>, portalRoot);
};
