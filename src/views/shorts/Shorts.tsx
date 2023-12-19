import AdaptableCard from '@/components/shared/AdaptableCard'
import ShortsTable from './components/ShortsTable'
import ShortsTableTools from './components/ShortsTableTools'
import ShortStatistic from './components/ShortStatistic'
import { injectReducer } from '@/store'
import reducer from './store'

injectReducer('crmCustomers', reducer)

const Shorts = () => {
    return (
        <>
            <ShortStatistic />
            <AdaptableCard className="h-full" bodyClass="h-full">
                <ShortsTableTools />
                <ShortsTable />
            </AdaptableCard>
        </>
    )
}

export default Shorts
