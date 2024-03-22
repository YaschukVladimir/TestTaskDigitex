import React, { RefObject, useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { CoordsArr, State } from "../types/types";

function Canvas (): React.JSX.Element {
    const entitiesFromStore = useSelector((state: State) => state.appSlice.entities);

    const canvasRef = useRef() as RefObject<HTMLCanvasElement>;
    useEffect(() => {
        const canvas = (canvasRef.current as HTMLCanvasElement);
        
        const context  = (canvas.getContext('2d') as CanvasRenderingContext2D);
        
        const canvasPlotWidth = canvas.clientWidth;
        const canvasPlotHeight = canvas.clientHeight;

        const scaleX = 30;
        const scaleY = 30;

        const xAxis = Math.round(canvasPlotWidth / scaleX / 2) * scaleX;
        const yAxis = Math.round(canvasPlotHeight / scaleY / 2) * scaleY;

        const grad = context.createLinearGradient(0, 0, 600, 600);
        grad.addColorStop( 0, '#FFC79D');
        grad.addColorStop( 0.50, '#A7D4F7');
        grad.addColorStop( 1, '#FFA1BD');

        // const canvasX = xAxis + xDec * scaleX;
        // const canvasY = yAxis - yDec * scaleY;

        // const xDec = (canvasX - xAxis) / scaleX;
        // const yDec = (yAxis - canvasY) / scaleY;

        context.beginPath();
        context.strokeStyle = '#f5f0e8';

        for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
            context.moveTo(i, 0);
            context.lineTo(i, canvasPlotHeight);
            context.fillText(((i - xAxis) / scaleX).toString(), i, yAxis);
        }

        for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
            context.moveTo(0, i);
            context.lineTo(canvasPlotWidth, i);
            context.fillText(((yAxis - i) / scaleY).toString(), xAxis, i);
        }
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle = 'black';
        context.moveTo(xAxis, 0);
        context.lineTo(xAxis, canvasPlotHeight);
        context.fillText('y', xAxis - 20, 20);

        context.moveTo(0, yAxis);
        context.lineTo(canvasPlotWidth, yAxis);
        context.fillText('x', canvasPlotWidth - 20, yAxis - 20);

        context.stroke();
        context.closePath();

        const coordsArr: CoordsArr[] = []
        context.beginPath();
        context.fillStyle = grad; 
        context.strokeStyle = 'black';

        entitiesFromStore.forEach((entity) => {

            context.strokeStyle = grad;
            coordsArr.push([Number(entity.coords.x), Number(entity.coords.y)])
            const x = xAxis + entity.coords.x * scaleX;
            const y = yAxis - entity.coords.y * scaleY;

            console.log(coordsArr, 'coordsArr')
            
            
            context.arc(x, y, 3, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
            context.fill(); 
        });

        if (coordsArr.length > 1) {   
            context.moveTo(coordsArr[0][0], coordsArr[0][1]);
            context.lineTo(coordsArr[coordsArr.length -1][0], coordsArr[coordsArr.length -1][1]);    
        }
        context.fillStyle = grad;
        context.stroke();
        // context.closePath();

        return (
            () => {
                context.clearRect(0, 0, canvasPlotWidth, canvasPlotHeight);
            }
        )
        
    }, [entitiesFromStore]);

    

    return (
        <div className="canvas__container">
            <canvas className="canvas__plot" id="canvas-plot" width="600" height="600" ref={canvasRef}></canvas>
        </div>
    )
}

export default Canvas;
