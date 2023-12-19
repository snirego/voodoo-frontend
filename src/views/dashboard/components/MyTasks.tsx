import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Table from '@/components/ui/Table'
import Tag from '@/components/ui/Tag'
import { useNavigate } from 'react-router-dom'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import ActionLink from '@/components/shared/ActionLink'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table'

type Task = {
    taskId: string
    taskSubject: string
    priority: number
    assignees: {
        id: string
        name: string
        email: string
        img: string
    }[]
}

type MyTasksProps = {
    data?: Task[]
}

const { Tr, Th, Td, THead, TBody } = Table

const PriorityTag = ({ priority }: { priority: number }) => {
    switch (priority) {
        case 0:
            return (
                <Tag className="text-white bg-red-600 dark:text-white dark:bg-red-600 rounded border-0">
                    YouTube
                </Tag>
            )
        case 1:
            return (
                <Tag className="text-white bg-indigo-600 dark:text-white dark:bg-indigo-600 rounded border-0">
                    Instagram
                </Tag>
            )
        case 2:
            return (
                <Tag className="bg-zinc-800 text-white dark:bg-zinc-900/40 dark:text-zinc-100 rounded border-0">
                    TikTok
                </Tag>
            )
        default:
            return null
    }
}

const MyTasks = ({ data = [] }: MyTasksProps) => {
    const navigate = useNavigate()

    const columns: ColumnDef<Task>[] = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'taskId',
                cell: (props) => {
                    const { taskId } = props.row.original
                    return (
                        <ActionLink
                            themeColor={false}
                            className="font-semibold"
                            to="/app/project/scrum-board"
                        >
                            {taskId}
                        </ActionLink>
                    )
                },
            },
            {
                header: 'Scheduled To',
                accessorKey: 'taskSubject',
            },
            {
                header: 'Platform',
                accessorKey: 'priority',
                cell: (props) => {
                    const { priority } = props.row.original
                    return <PriorityTag priority={priority} />
                },
            },
            // {
            //     header: 'Assignees',
            //     accessorKey: 'Assignees',
            //     cell: (props) => {
            //         const { assignees } = props.row.original
            //         return <UsersAvatarGroup users={assignees} />
            //     },
            // },
        ],
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const onViewAllTask = () => {
        navigate('/app/shorts')
    }

    return (
        <Card>
            <div className="flex items-center justify-between mb-6">
                <h4>Upcoming Shorts</h4>
                <Button size="sm" onClick={onViewAllTask}>
                    View All
                </Button>
            </div>
            <Table>
                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
        </Card>
    )
}

export default MyTasks
