import React from 'react'
import {
  Inbox,
  InboxHeader,
  InboxTitle,
  InboxMessageContainer,
  InboxMessage,
  InboxMessageImage,
  InboxMessageTitle,
  InboxMessageSub,
  InboxMessageTextContainer
} from '@/components/inbox'

const Message = function () {
  return (
    <InboxMessage>
      <InboxMessageImage
        src='https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D'
        name='Stego Mike'
        isActive={true}
        lastSeenInMins={0}
      />
      <InboxMessageTextContainer>
        <InboxMessageTitle>Stego Mike</InboxMessageTitle>
        <InboxMessageSub>Stego sent a photo.•1h</InboxMessageSub>
      </InboxMessageTextContainer>
    </InboxMessage>
  )
}

export default function Archived() {
  return (
    <Inbox>
      <InboxHeader>
        <InboxTitle>Archived</InboxTitle>
      </InboxHeader>
      <InboxMessageContainer>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </InboxMessageContainer>
    </Inbox>
  )
}
