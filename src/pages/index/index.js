import React from 'react'
import data from 'src/data.json'
import HighlightJson from '~/components/highlight-json'
import Icon from '~/components/icon'
import MainLayout from '~/layouts/main'
import SEO from '~/components/seo'
import './styles.css'

export default function IndexPage() {
  const { profile, socialLinks } = data

  return (
    <>
      <SEO />
      <MainLayout>
        <div className="home__coverage-img" />
        <div className="flex flex-col justify-start p-10vw md:p-0 md:justify-center w-full">
          <HighlightJson profile={JSON.stringify(profile, null, 4)} />
          <nav className="mt-6 flex flex-col md:flex-row">
            {Object.keys(socialLinks).map(iconName => (
              <a
                key={socialLinks[iconName]}
                href={socialLinks[iconName]}
                target="__blank"
                rel="noopener"
                aria-label={iconName}
                className="self-start mb-8 md:mb-0 md:mr-8 last:mb-0"
              >
                <Icon name={iconName} size={32} className="text-selection" />
              </a>
            ))}
          </nav>
        </div>
      </MainLayout>
    </>
  )
}
