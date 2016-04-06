/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.utils.MG2Log;
import com.mckesson.mg2.client.worklist.LabWorklistView;
import com.vaadin.polymer.paper.widget.PaperIconButton;

/**
 * @author efdj6eb
 *
 */
abstract public class NavMenuView extends Composite {
    /**
     * logger 
     */
    static final MG2Log log = new MG2Log(NavMenuView.class);
    
    @UiField
    public PaperIconButton navPatientActive;
    @UiField
    public PaperIconButton navWorklist;
    @UiField
    public PaperIconButton navMessage;
    @UiField
    public PaperIconButton navCalendar;
    @UiField
    public PaperIconButton navHamburgerMenu;

    /**
     * 
     */
    public NavMenuView() {
        //  main menu patient search
        navPatientActive.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                gotoPatientSearchView();                
            }
        }); 
        // main menu lab worklist
        navWorklist.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                gotoWorklistView();
            }
        });
        // main menu message
        navMessage.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                gotoMessageView();
                
            }
        });
        // main menu calendar
        navCalendar.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                      gotoCalendarView();  
            }
        });
        // main menu hamburger    
    }
    
    /**
     * 
     */
    protected void gotoCalendarView() {
        log.info("gotoCalendarView()");
        clear();
        // clicked search button forces search view reset        
        RootPanel.get().add((Widget) GWT.create(CalendarView.class));
        
    }

    /**
     * 
     */
    protected void gotoMessageView() {
        log.info("gotoMessageView()");
        clear();
        // clicked search button forces search view reset        
        RootPanel.get().add((Widget) GWT.create(MessageView.class));
    }

    protected void clear() {
        RootPanel.get().clear();
    }

    protected void gotoPatientSearchView() {
        log.info("gotoPatientSearchView()");
       clear();
        // clicked search button forces search view reset        
        RootPanel.get().add((Widget) GWT.create(PatientSearchView.class));
    }

    protected void gotoWorklistView() {
        log.info("gotoWorklistView()");
        clear();
        // clicked search button forces search view reset        
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));
    }

}
