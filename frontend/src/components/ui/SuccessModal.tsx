import { CircleCheck } from 'lucide-react';
import { useId } from 'react';
import { Modal } from './Modal';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  note?: string;
}

export function SuccessModal({ open, onClose, title, message, note }: SuccessModalProps) {
  const titleId = useId();
  const messageId = useId();
  const noteId = useId();

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      describedBy={note ? `${messageId} ${noteId}` : messageId}
      closeButtonLabel={`Close ${title}`}
      panelClassName="success-modal-panel"
    >
      <div className="success-modal-content">
        <CircleCheck className="success-modal-icon" aria-hidden="true" />
        <h2 id={titleId}>{title}</h2>
        <p id={messageId}>{message}</p>
        {note ? <p id={noteId} className="success-modal-demo-note">{note}</p> : null}
        <button type="button" className="button button-primary success-modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
