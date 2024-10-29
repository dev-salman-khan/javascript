// arrays in javascript 
        const sourth_hero = ["Parabas","Phuspa Raj","RRR","Bahubali"]
        const nourth_hero = ["Salman Khan"," Shah Ruk Khan","Pathan","Tiger Zinda Hay"]
        // Array In Array by Push Function 
        // sourth_hero.push(nourth_hero)
        // console.log(sourth_hero)
        // margin Two Arrays With One Array With concat funtion 
        const all_hero_flim = sourth_hero.concat(nourth_hero);
        console.log(all_hero_flim);
        // Array Join 
        const array_number = ['1','2','3','4','5','6','7','8','9']
        const array_join = array_number.join()
        console.log(array_number)
        console.log( array_join)
        console.log(typeof array_join)


        // slice and splice in array 

        console.log("With Started 0")
        // when done with slice when used And Start in 0 
        // const for_slice = array_number.slice(0, 4)
        // console.log(for_slice)
        // const for_splice = array_number.splice(0, 4)
        // console.log(for_splice)


        console.log("With Started 1")
        const for_slice2 = array_number.slice(1, 4) // when done with slice when used And Start in 1
        console.log(for_slice2)
        const for_splice6 = array_number.splice(1, 4)
        console.log(for_splice6)
