import React, { useState } from 'react'
import { useSpring, animated, config } from "react-spring"



export default function UseSpringTutorial() {

    const [toggle, setTogle]  = useState(false);

    const anim = useSpring({
        from: {
            opacity: 0,
            transform: `scale(${toggle ? 1: 0}) translateY(${toggle ? 0 : 100}px)`,
            color: toggle ? "green":  "red",
            customValue: 0
        },
        to:{
            opacity: 1,
            transform: `scale(${toggle ? 0 : 1}) translateY(${toggle ? 100 : 0}px)`,
            color: toggle ? "red":"green" ,
            customValue: 1000
        },
        // config:{
        //     mass:5,   // มวลของวัตถุ จำไว้ว่าคือ น้ำหนัก
        //     friction: 20, // เเรงเสียดทานของสปริง สปริงนั้นเเข็งเเค่ไหน
        //     tension:300  // เเรงดึง เราดิงสปริงไว้เเค่ไหน
        // }
        config: config.slow  //  config.stiff : animation จะออกมาเร็วๆ แล้วเด้งๆนึดนึงในตอนท้าย   
                             // config.slow : ช้าแบบเรียบหรู
    });
    return (
        
            <animated.div 
            onMouseDown={() => setTogle(!toggle)}
            onMouseUp={() => setTogle(!toggle)}
            style={{ ...anim, fontSize: "200px"}}>
                {anim.customValue.to(customValue => customValue.toFixed(0)+"%")}
            </animated.div>
            
    );
    
}
