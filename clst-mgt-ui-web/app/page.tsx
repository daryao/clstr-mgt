import Link from 'next/link'
import { fetchClusters } from './utils/api'
const Home = async () => {
    const clusters = await fetchClusters()

    return (
        <main
            role="main"
            className="w-screen h-screen mx-auto p-4 bg-gray-800 flex justify-center items-center"
        >
            <div className="container justify-center text-center">
                <h1 className="text-zinc-100 text-xl font-light font-Nunito leading-loose pb-4">
                    View Available Clusters:
                </h1>
                <div className="w-48 h-px bg-slate-700 mx-auto"></div>
                <ul className="flex pt-4 text-md flex-col overflow-hidden content-center justify-between list-disc list-inside text-zinc-100">
                    {clusters.map(
                        (cluster: {
                            uuid: string
                            name: string
                            performace_data: any
                            cluster_snapshot_policy: any
                        }) => (
                            <Link
                                key={cluster.uuid}
                                href={`/${cluster.uuid}/metrics`}
                            >
                                <li className="py-2 hover:bg-gray-900">
                                    <span className="grow shrink basis-0 text-white font-light font-Nunito leading-normal">
                                        {cluster.name}
                                    </span>
                                </li>
                            </Link>
                        )
                    )}
                </ul>
            </div>
        </main>
    )
}

export default Home
