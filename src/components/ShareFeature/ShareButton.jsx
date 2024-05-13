import React, { useState } from 'react'
import { Share2 } from 'lucide-react'
import ShareModal from './ShareModal'

function ShareButton({ dealDetail }) {
    const [showModal, setShowModal] = useState(false)

  return (
    <div>
        <button
        className="
        flex gap-5 border-4 border-dark-blue  active:bg-dark-blue active:text-white
        text-dark-blue px-5 max-md:px-2 py-2 max-md:py-1 rounded-xl transition-all duration-200 shadow
        hover:bg-dark-blue hover:text-white
        "
        onClick={() => setShowModal(true)}
        >
            <Share2 />
            <p className=' font-bold text-lg max-md:hidden'>Share</p>
        </button>
        {showModal &&
        <ShareModal
        onClose={() => setShowModal(false)}
        dealDetail={dealDetail}
        />}
    </div>
  )
}

export default ShareButton