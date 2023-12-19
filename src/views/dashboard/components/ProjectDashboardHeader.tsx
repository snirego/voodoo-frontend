type ProjectDashboardHeaderProps = {
    userName?: string
    taskCount?: number
}

const ProjectDashboardHeader = ({
    userName,
    taskCount,
}: ProjectDashboardHeaderProps) => {
    return (
        <div>
            <h4 className="mb-1">Hello, {userName}!</h4>
            <p>You have {taskCount} scheduled shorts</p>
        </div>
    )
}

export default ProjectDashboardHeader
