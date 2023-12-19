import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'
import ListItem, { ListItemData } from '../../videos/components/ListItem'

type ProjectsProps = {
    data?: ListItemData[]
}

const Projects = ({ data = [] }: ProjectsProps) => {
    const navigate = useNavigate()

    const onViewAllProjects = () => {
        navigate('/app/videos')
    }

    return (
        <Card>
            <div className="flex items-center justify-between mb-6">
                <h4>Videos</h4>
                <Button size="sm" onClick={onViewAllProjects}>
                    View All
                </Button>
            </div>
            {data.map((project) => (
                <ListItem key={project.id} cardBorder data={project} />
            ))}
        </Card>
    )
}

export default Projects
