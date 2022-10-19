import Image from 'next/image'

export default function InstallScreen({ installPrompt }) {
  return (
    <div className='install-bg'>
      <Image
        style={{ borderRadius: '10px' }}
        src={'/icons/icon-512.png'}
        alt=''
        width={150}
        height={150}
      />
      <p
        style={{
          margin: '0',
          marginTop: '0.75rem',
          fontSize: '28px',
          fontWeight: '600',
        }}
      >
        Loop
      </p>
      <p
        style={{
          margin: '0',
          marginTop: '0.5rem',
          fontWeight: '400',
          fontSize: '18px',
        }}
      >
        Music & Relaxation
      </p>

      <hr
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          width: '60vw',
          marginTop: '1.5rem',
          marginBottom: '1.75rem',
        }}
      />

      <button className='install-btn' onClick={installPrompt}>
        Install
      </button>
    </div>
  )
}
