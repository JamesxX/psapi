/**
 * PSAPI
 * https://github.com/JamesxX/psapi
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

class User{
    
    constructor(UniqueID, Points, Items, Parent ){
        this.UniqueID = UniqueID;
        this.Points = Points;
        this.Items = JSON.parse( Items );
        this.ParentClass = Parent;
    }
    
    Invalidate( ){ this.ParentClass.InvalidateUser( this.GetUniqueID(), this ); }
    GetUniqueID( ){ return this.UniqueID; }
    
    GetPoints( ){ return this.Points; }
    SetPoints( Points ){ this.Points = Points; this.Invalidate( ); }
    AddPoints( Points ){ this.SetPoints( this.GetPoints() + Points ); }
    
    GetItems( ){ return this.Items; }
    
    AddItem( ID, Modifiers, Equipped ){
        this.Items[ ID ] = {
            Modifiers: Modifiers, 
            Equipped: Equipped
        };
        this.Invalidate( );
    }
    
    RemoveItem( ID ){
        delete this.Items[ ID ];
        this.Invalidate( );
    }

}

module.exports = User;