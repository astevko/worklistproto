/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.TouchEndEvent;
import com.google.gwt.event.dom.client.TouchEndHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.InlineHTML;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;

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
    
    
    @UiField public InlineHTML tabLabResults;
    @UiField public InlineHTML tabSignOrders;
    @UiField public InlineHTML tabImaging;
    @UiField public InlineHTML tabReviewNotes;
    @UiField public InlineHTML tabOtherDocuments;
    @UiField public InlineHTML tabERX;
    
    public static void gotoLabWorklistView() {
        log.info("gotoLabWorklistView()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(LabWorklistView.class));        
    }
    public static void gotoSignOrdersView() {
        log.info("gotoSignOrdersView()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(SignOrdersView.class));        
    }
    public static void gotoImagingView() {
        log.info("gotoImagingView()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(ImagingView.class));        
    }
    public static void gotoReviewNotesView() {
        log.info("gotoReviewNotesView()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(ReviewNotesView.class));        
    }
    public static void gotoOtherDocumentsView() {
        log.info("gotoOtherDocumentsView()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(OtherDocumentsView.class));        
    }
    public static void gotoERXView() {
        log.info("gotoERXView()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(ERXView.class));        
    }
    /**
     * 
     */
    public static void gotoTransferProvider() {
        log.info("gotoTransferProvider()");
        // clicked tab
        clear();
        RootPanel.get().add((Widget) GWT.create(TransferProviderView.class));        
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
        tabLabResults.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
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
        tabSignOrders.addTouchEndHandler(new TouchEndHandler() {
            
            @Override
            public void onTouchEnd(TouchEndEvent event) {
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
                gotoReviewNotesView();
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
