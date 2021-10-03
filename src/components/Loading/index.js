const borderTop = {
    borderTopColor: 'transparent'
}

const Loading = () => (
    <div className="pt-16">
        <div className="w-8 h-8 border-4 border-green-600 border-double rounded-full mx-auto animate-spin" style={borderTop} />
    </div>
);

export default Loading;
