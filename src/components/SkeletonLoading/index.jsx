import {Skeleton} from "@mui/material";

const SkeletonLoading = () => (
    <div className="pt-10">
        <Skeleton animation="wave" width="20%"/>
        <div className="grid gap-8 my-4 justify-center"
             style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}
        >
            {Array.from({length: 3}, (_, i) => (
                <div className="w-full">
                    <Skeleton animation="wave" variant="rectangular" className="w-full" height={118}/>
                    <Skeleton animation="wave" width="60%"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                </div>
            ))}
        </div>
    </div>
)

export default SkeletonLoading;