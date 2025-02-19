import { useState } from 'react'
import { Button, IconMessageCircle, Popover } from '@supabase/ui'
import FeedbackWidget from './FeedbackWidget'

const FeedbackDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [category, setCategory] = useState('Feedback')

  function onOpen() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <Popover
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e)}
      size="content"
      side="bottom"
      align="end"
      overlay={
        <FeedbackWidget
          onClose={() => setIsOpen(false)}
          setFeedback={setFeedback}
          feedback={feedback}
          category={category}
          setCategory={setCategory}
        />
      }
    >
      <Button
        as="span"
        onClick={onOpen}
        type="default"
        icon={<IconMessageCircle size={16} strokeWidth={1.5} className="text-scale-900" />}
      >
        Feedback on this page?
      </Button>
    </Popover>
  )
}

export default FeedbackDropdown
