'use client';

import { Tooltip } from 'flowbite-react';
import Research from '../Cards/Research';

function ResearchToolpit() {
  return (
    <Tooltip content='Double click to view or edit a contact'>
        <Research />
    </Tooltip>
  )
}

export default ResearchToolpit;