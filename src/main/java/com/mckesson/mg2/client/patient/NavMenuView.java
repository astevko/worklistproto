/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.MainView;
import com.mckesson.mg2.client.utils.MG2Log;
import com.mckesson.mg2.client.worklist.LabWorklistView;
import com.vaadin.polymer.paper.widget.PaperIconButton;
import com.vaadin.polymer.paper.widget.PaperToast;

/**
 * @author efdj6eb
 */
abstract public class NavMenuView extends Composite {
    /**
     * logger
     */
    static final MG2Log log = new MG2Log(NavMenuView.class);

    @UiField
    public HTMLPanel view;

    @UiField
    public PaperIconButton navPatient;
    @UiField
    public PaperIconButton navWorklist;
    @UiField
    public PaperIconButton navMessage;
    @UiField
    public PaperIconButton navCalendar;
    @UiField
    public PaperIconButton navHamburgerMenu;

    @UiField
    public PaperToast toast;
    
    private static MainView mainView = MainView.get();
  
    public static void gotoCalendarView() {
        log.info("gotoCalendarView()");

        // clicked search button forces search view reset
        mainView.gotoView((Widget) GWT.create(CalendarView.class));
    }

    public static void gotoMessageView() {
        log.info("gotoMessageView()");

        // clicked search button forces search view reset
        mainView.gotoView((Widget) GWT.create(MessageView.class));
    }

    public static void gotoPatientSearchView() {
        log.info("gotoPatientSearchView()");
        // clicked search button forces search view reset
        mainView.gotoView((Widget) GWT.create(PatientSearchView.class));
    }

    public static void gotoWorklistView() {
        log.info("gotoWorklistView()");

        // clicked search button forces search view reset
        mainView.gotoView((Widget) GWT.create(LabWorklistView.class));
    }

    /*
     * (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Composite#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(final Widget widget) {
        super.initWidget(widget);

        // cheap substitute for height: 100%
        view.setHeight(Window.getClientHeight() + "px");

        // main menu patient search
        navPatient.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoPatientSearchView();
            }
        });
        // main menu lab worklist
        navWorklist.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoWorklistView();
            }
        });
        // main menu message
        navMessage.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoMessageView();

            }
        });
        // main menu calendar
        navCalendar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoCalendarView();
            }
        });
        // main menu hamburger

    }

}
