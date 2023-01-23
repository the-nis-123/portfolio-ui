const TimelineCard = ({highlight}) => {
  
  return (
    <div className='timeline-card'>
      <section className="content">
        <h4>{highlight.year}</h4>

        <ol className='works'>
          <For each='work' of={highlight.works}>
            <li key={work}>{work}</li>
          </For>
        </ol>
      </section>
    </div>
  )
}

export default TimelineCard