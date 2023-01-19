import { useNavigate } from "react-router-dom"

const TimelineCard = ({summary}) => {
  
  const navigate = useNavigate();

  return (
    <div className='timeline-card' onClick={ () => navigate('/timeline')}>
      <section className="content">
        <h4>{summary.year}</h4>

        <ol className='works'>
          <For each='work' of={summary.works}>
            <li key={work}>{work}</li>
          </For>
        </ol>
      </section>
    </div>
  )
}

export default TimelineCard