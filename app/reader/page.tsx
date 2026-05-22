import { Suspense } from 'react'
import ReaderClient from './ReaderClient'

export default function ReaderPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-cream">
          <p className="font-mclaren text-2xl text-mute">Уншиж байна...</p>
        </div>
      }
    >
      <ReaderClient />
    </Suspense>
  )
}
