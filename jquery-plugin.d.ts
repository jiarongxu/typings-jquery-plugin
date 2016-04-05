/// <reference path="../jquery/jquery.d.ts" />

interface JQuery{
    typed(options: any): JQuery
}

interface WaypointStatic{
    new( options: any ):WaypointStatic;
}

declare var Waypoint: WaypointStatic;
