import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Bagel Breakfast 🥯" 
                            color="blue" 
                            location="Ess-a-Bagel, Midtown" 
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Central Park Run 🏃‍♂️" 
                            color="green" 
                            location="Central Park, Great Lawn" 
                        />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Startup Standup 👥" 
                            color="pink" 
                            location="Silicon Alley, Flatiron" 
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Museum Visit 🖼️" 
                            color="blue" 
                            location="The Met, Upper East Side" 
                        />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Lunch at Katz's 🍔" 
                            color="green" 
                            location="Katz's Delicatessen, Lower East Side" 
                        />
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event 
                            event="Broadway Matinee 🎭" 
                            color="pink" 
                            location="Broadway, Theater District" 
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Brooklyn Bridge Walk 🌉" 
                            color="blue" 
                            location="Brooklyn Bridge, Manhattan Side" 
                        />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Chelsea Art Gallery 🖌️" 
                            color="pink" 
                            location="Chelsea, West Side" 
                        />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event 
                            event="Rooftop Drinks 🍸" 
                            color="green" 
                            location="230 Fifth Rooftop, Flatiron" 
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;