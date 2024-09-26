const Toggler = () => {
    return (
        <div className="switch3">
            <input type="radio" id="switch3-radio1" name="radio"/>
            <label htmlFor="switch3-radio1">FrontEnd</label>
            <input type="radio" id="switch3-radio2" name="radio"/>
            <label htmlFor="switch3-radio2">BackEnd</label>
        </div>
    );
};

export default Toggler;