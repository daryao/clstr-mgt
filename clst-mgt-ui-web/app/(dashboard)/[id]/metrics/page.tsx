import Image from "next/image";
import Link from "next/link";
import { fetchClusterInfo } from '../../../utils/api';
import IOPSChart from '../../../components/IOPSChart';
import ThroughputChart from '../../../components/ThroughputChart';

const Metrics = async ({params}) => {
  const clusterInfo = await fetchClusterInfo(params.id);

  const iopsMetrics = clusterInfo.performance_data.map(metric => {
    const timestamp = new Date(metric.timestamp);
    const formattedTimestamp = `${timestamp.toLocaleString('en-us', { month: 'long' })} ${timestamp.getDate()}`;
    
    return {
      timestamp: formattedTimestamp,
      read: metric.storage_performance.disk_iops.read,
      write: metric.storage_performance.disk_iops.write
    };
  }).slice(-7); // just the last 7 days

  const throughputMetrics = clusterInfo.performance_data.map(metric => {
    const timestamp = new Date(metric.timestamp);
    const formattedTimestamp = `${timestamp.toLocaleString('en-us', { month: 'long' })} ${timestamp.getDate()}`;
    
    return {
      timestamp: formattedTimestamp,
      read: metric.storage_performance.disk_iops.read,
      write: metric.storage_performance.disk_iops.write
    };
  }).slice(-7); // just the last 7 days

    return (
      <div className="w-screen h-screen flex flex-col sm:flex-row flex-grow overflow-hidden bg-neutral-800 border border-gray-800 text-zinc-400 font-Nunito">
        <div className="sm:w-1/3 md:1/5 max-w-[330px] flex-shrink flex-grow-0 bg-gray-800 items-center">
            <div className="h-screen sticky top-0 pt-4 pl-4 w-full flex justify-between flex-col border border-gray-800">
                <div>
                    <div className="pt-2 pb-4 px-2 flex justify-left">
                        <Image alt="" src="/images/union-icon.png" width={28} height={28} className="w-7 sm:mx-2 mx-4 inline" />
                        <span className="text-zinc-100 text-xl font-light">{clusterInfo.name}</span>
                    </div>
                    <div className="w-full h-px pr-4 bg-slate-700"></div>
                    <ul className="flex pt-4 flex-col overflow-hidden content-center justify-between list-disc list-inside">
                    <Link href={`/${clusterInfo.uuid}/metrics`}>
                        <li className="pl-2 py-2 hover:bg-gray-900">
                            <span className="grow shrink basis-0 text-white text-sm font-normal font-Nunito leading-normal">Performance Metrics</span>
                        </li>
                      </Link>
                      <Link href={`/${clusterInfo.uuid}/snapshot-policy`}>
                        <li className="pl-2 py-2 hover:bg-gray-900">
                            <span className="grow shrink basis-0 text-white text-sm font-normal font-Nunito leading-normal">Edit Snapshot Policy</span>
                        </li>
                      </Link>
                    </ul>
                </div>
                <div>
                    <div className="w-full h-px bg-slate-700 pr-4"></div>
                    <div className="py-2 px-2 flex justify-between items-center hover:bg-gray-900">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>
                            <span className="pl-2 text-zinc-100 text-sm font-normal font-Nunito leading-non">AD\user</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-screen flex-grow m-1 p-4 overflow-auto bg-gray-900 justify-start items-center border border-1 border-zinc-700">
          <h1 className="text-zinc-100 text-[21px] font-light font-Nunito leading-loose pb-4">Performance Metrics</h1>
          <h2 className="text-zinc-100 text-[21px] font-light font-Nunito leading-loose">IOPS</h2>
          <div className="p-4">
            <IOPSChart data={iopsMetrics} />
          </div>
          <h2 className="text-zinc-100 text-[21px] font-light font-Nunito leading-loose">Throughput</h2>
          <div className="p-4">
            <ThroughputChart data={throughputMetrics} />
          </div>
        </div>
      </div>
  );

}

export default Metrics;
