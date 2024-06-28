import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud'

const SkillsCloud = (props: { className?: string | undefined }) => {
  return (
    <div className={props.className}>
      <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        TAG CLOUD
      </h1>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast'
        })}
        onClick={(tag: string) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          'HTML5',
          'CSS3',
          'WordPress',
          'PHP',
          'Javascript',
          'JQuery',
          'MySQL',
          'SQL Server',
          'Figma',
          'Java',
          'C#',
          'Star UML',
          'Astro',
          'React',
          'Tailwind',
          'Three.js'
        ]}
      </TagCloud>
    </div>
  )
}

export default SkillsCloud
