export const GlobalStyles = () =>{ 
    return(
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

        *{
            margin: 0;
            padding:0;
            box-sizing: border-box;
            font-family: 'Source Sans Pro', sans-serif;
            font-weight:400;
            text-decoration:none;
            list-style:none;
        }`}</style>
    )
}
;