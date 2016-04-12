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
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.utils.MG2Log;
import com.mckesson.mg2.client.worklist.LabWorklistView;
import com.vaadin.polymer.paper.widget.PaperIconButton;

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

    protected void clear() {
        log.info("clear view");
        RootPanel.get().clear();
    }

    protected void gotoCalendarView() {
        log.info("gotoCalendarView()");
        clear();
        // clicked search button forces search view reset
        RootPanel.get().add((Widget) GWT.create(CalendarView.class));
    }

    protected void gotoMessageView() {
        log.info("gotoMessageView()");
        clear();
        // clicked search button forces search view reset
        RootPanel.get().add((Widget) GWT.create(MessageView.class));
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
