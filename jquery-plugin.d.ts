/// <reference path="../jquery/jquery.d.ts" />

interface JQuery{
    typed(options: Object): JQuery
}

interface WaypointStatic{
    new( options: any ):WaypointStatic;
}

declare var Waypoint: WaypointStatic;
