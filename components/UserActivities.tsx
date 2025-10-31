import { recentActivityData } from '@/constants'
import { ClockFading } from 'lucide-react'


const activities = recentActivityData || []

const UserActivities = () => {
  return (
    <div>
      {activities?.length ? (
        <div>
        {activities.map((items) => (
        <div 
        key={items.id}
        className="flex items-start space-x-3 p-3 rounded-lg "
        >
            <div className='flex-1 items-center'>
                <div className='flex justify-between'>
                    <h4 className='font-medium'>{items.action}</h4>
                    <div className='flex gap-4 items-center'>
                        <ClockFading className='text-sm text-gray-400'/>
                        <span className='text-sm'>{items.time}</span>
                    </div>
                </div>
                <p className='text-xs text-gray-500'>{items.desc}</p>
            </div>
        </div>
        ))}
    </div>
      ) : (
        <div className='text-center'>No activities</div>
      )}
    </div>
  )
}

export default UserActivities