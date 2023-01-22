import React from 'react'

const Skeleton = () => {
    return (
        <div className="w-full p-4 mx-auto border rounded-md shadow my-7">
            <div className="flex space-x-4 animate-pulse">
                <div className="flex-1 py-1 space-y-6">
                    <div className="h-8 rounded bg-slate-200" />
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 col-span-1 rounded bg-slate-200" />
                            <div className="h-2 col-span-1 rounded bg-slate-200" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 col-span-1 rounded bg-slate-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skeleton
