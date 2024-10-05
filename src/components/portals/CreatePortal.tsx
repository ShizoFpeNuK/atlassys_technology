import { createPortal } from "react-dom";
import { FC, ReactNode, useEffect, useRef } from "react";

interface CreatePortalProps {
	isOpen: boolean;
	onClose?: () => void;
	children: ReactNode;
}

const CreatePortal: FC<CreatePortalProps> = ({ isOpen, onClose, children }) => {
	const portalDiv = useRef<Element | null>(null);

	useEffect(() => {
		portalDiv.current = document.getElementById("modal-root");
	}, []);
  
  console.log(portalDiv.current);

	if (!isOpen) return null;

  return portalDiv.current ? createPortal(children, portalDiv.current) : null;
};

export default CreatePortal;
