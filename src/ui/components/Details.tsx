import React, { FC } from 'react';

export type DetailsContent = {
  stats: [string, number][];
  attributes: [string, string][];
  info: [string, string][];
  links: [string, string][];
};

type DetailsProps = {
  label: string;
  content: DetailsContent;
  id: string;
};

type DetailsBlockProps = {
  details: [string, number][] | [string, string][];
  id: string;
};

type LinkBlockProps = {
  links: [string, string][];
};

const DetailsBlock: FC<DetailsBlockProps> = ({ details, id }): JSX.Element => (
  <>
    {details.map((current, index) => (
      <React.Fragment key={`${id}-${index}-1`}>
        <div className='text-nowrap p-1 text-right font-bold capitalize'>
          {current[0]}
        </div>
        <div className='overflow-hidden text-wrap break-words p-1 text-left'>
          {current[1]}
        </div>
      </React.Fragment>
    ))}
  </>
);

const LinksBlock: FC<LinkBlockProps> = ({ links }): JSX.Element => (
  <>
    {links.map((current, index) => (
      <a
        key={index}
        className='font-bold capitalize text-blue-500'
        href={current[1]}
        target='_blank'
        rel='noreferrer'
      >
        {current[0]}
      </a>
    ))}
  </>
);

const Details: FC<DetailsProps> = ({ label, content, id }): JSX.Element => (
  <details className='w-full'>
    <summary className='cursor-pointer text-center text-sm font-bold'>
      {label}
    </summary>
    <div>
      <section className='mb-2 grid grid-cols-[min-content_1fr] text-xs'>
        <DetailsBlock details={content.info} id={id} />
        <div className='text-nowrap p-1 text-right font-bold capitalize'>
          Links
        </div>
        <div className='flex flex-wrap gap-3 overflow-hidden text-wrap break-words p-1 text-left'>
          <LinksBlock links={content.links} />
        </div>
      </section>
      <div className='flex w-full flex-wrap'>
        <section className=' flex-auto'>
          <h4 className='text-sm font-bold'>Stats</h4>
          <div className='grid  grid-cols-[min-content_1fr_min-content_1fr] text-xs'>
            <DetailsBlock details={content.stats} id={id} />
          </div>
        </section>
        <section className=' flex-auto'>
          <h4 className='text-sm font-bold'>Attributes</h4>
          <div className='grid  grid-cols-[min-content_1fr_min-content_1fr] text-xs'>
            <DetailsBlock details={content.attributes} id={id} />
          </div>
        </section>
      </div>
    </div>
  </details>
);

export default Details;
