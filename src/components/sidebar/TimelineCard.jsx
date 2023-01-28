const TimelineCard = ({highlight, year}) => {
  
  console.log(highlight);

  return (
    <div className='timeline-card'>
      <section className="content">
        <h4>{year}</h4>

        <ol className='works'>
          <For each='work' of={highlight}>
            <li key={work}>{work}</li>
          </For>
        </ol>
      </section>
    </div>
  )
}

export default TimelineCard