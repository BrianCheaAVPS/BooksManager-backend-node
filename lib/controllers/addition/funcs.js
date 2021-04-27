const validateInput = (num) => {
    return (typeof num === 'number')
}

export const onAddition = (req, response) =>
{
    console.log(req.body)
    try 
    {
        const {num1, num2} = req.body;
        if ( !( validateInput(num1) && validateInput(num2) ) ) {
            throw 'Input Validation Failed';
        }
        const ret = (num1+num2).toString();

        return response.status(200).send(ret);
    }
    catch(e) { response.status(400).send(e) }
}