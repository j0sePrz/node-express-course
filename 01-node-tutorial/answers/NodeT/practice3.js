const fs = require('fs').promises;

const makeFile = async () => {
    for (let i = 0; i < 10; i++) {
        try{ if (i === 0 ) {
            await fs.writeFile( './content/practice2.txt',`This is the first line.\n`,
            (err)=> {
                if (err) {
                    console.log(err)
                    return
                }
            }
          )
        } else{ await fs.writeFile('./content/practice2.txt',
        `This is line ${i + 1}.\n`, {flag: 'a'}, (err) => {
            if (err) 
            { console.log(err)} 
            return
        }
        )}
    } catch (err) {console.log(err)}
  }
} 
makeFile();