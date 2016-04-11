/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.paper.widget.PaperTab;

/**
 * container for handling worklist menu selections
 * 
 * @author efdj6eb
 *
 */
public abstract class WorklistView extends NavMenuView {
    
    /**
     * logger
     */
    static final MG2Log log = new MG2Log(WorklistView.class);
    
    
    @UiField public PaperTab tabLabResults;
    @UiField public PaperTab tabSignOrders;
    @UiField public PaperTab tabImaging;
    @UiField public PaperTab tabReviewNotes;
    @UiField public PaperTab tabOtherDocuments;
    @UiField public PaperTab tabERX;
    
    protected void gotoLabWorklistView() {
        log.info("gotoLabWorklistView()");
        // clicked tab
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    protected void gotoSignOrdersView() {
        log.info("gotoSignOrdersView()");
        // clicked tab
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    protected void gotoImagingView() {
        log.info("gotoImagingView()");
        // clicked tab
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    protected void gotoReviewNotesView() {
        log.info("gotoReviewNotesView()");
        // clicked tab
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    protected void gotoOtherDocumentsView() {
        log.info("gotoOtherDocumentsView()");
        // clicked tab
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    protected void gotoERXView() {
        log.info("gotoERXView()");
        // clicked tab
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    /*
     * (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Composite#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(final Widget widget) {
        super.initWidget(widget);

        // tab
        tabLabResults.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoLabWorklistView();
            }
        });
        // tab
        tabSignOrders.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoSignOrdersView();
            }
        });
        // tab
        tabImaging.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoImagingView();

            }
        });
        // tab
        tabReviewNotes.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoOtherDocumentsView();
            }
        });
        // tab
        tabOtherDocuments.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoOtherDocumentsView();
            }
        });
        // tab
        tabERX.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                gotoERXView();
            }
        });

    }
}
