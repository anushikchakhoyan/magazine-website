const borderTop = {
    borderTopColor: 'transparent'
}

const Loading = () => (
    <div className="pt-16 absolute top-0 left-0 w-full h-full bg-black bg-opacity-25">
        <div className="w-8 h-8 border-2 border-black rounded-full mx-auto animate-spin" style={borderTop} />
    </div>
);

export default Loading;
