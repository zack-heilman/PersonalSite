import JobTimeline from "./JobTimeline";

const ResumeSection = () => {
    return (
        <div className="grid grid-cols-1 gap-14 lg:gap-7">
            <div className="col-span-1 lg:col-span-1">
                <JobTimeline />
            </div>
        </div>
    );
};

export default ResumeSection;
