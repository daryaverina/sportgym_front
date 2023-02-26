import { Dialog } from "@headlessui/react"
import { useUI } from "context/use-ui";

interface Props {
}

const ModalWindow: React.FC<Props> = () => {
    const { displayModal, closeModal, modalContent } = useUI();
    return (
        <>
            <Dialog
                open={displayModal}
                onClose={() => closeModal()}
                className="relative z-40"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm rounded bg-white z-50">
                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                            {modalContent}
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default ModalWindow