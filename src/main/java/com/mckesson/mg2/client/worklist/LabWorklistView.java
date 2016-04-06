/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.iron.widget.IronList;
import com.vaadin.polymer.iron.widget.IronSwipeableContainer;
import com.vaadin.polymer.iron.widget.event.IronSwipeEvent;
import com.vaadin.polymer.iron.widget.event.IronSwipeEventHandler;

/**
 * @author efdj6eb
 *
 */
public class LabWorklistView extends NavMenuView {

    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(LabWorklistView.class);
    
    private static LabWorklistViewUiBinder uiBinder = GWT.create(LabWorklistViewUiBinder.class);

    interface LabWorklistViewUiBinder extends UiBinder<Widget, LabWorklistView> {
    }
    
    /**
     * patient list
     */
    @UiField IronList list;
    
    
    @UiField IronSwipeableContainer swipeable;
    
    /**
     * Because this class has a default constructor, it can
     * be used as a binder template. In other words, it can be used in other
     * *.ui.xml files as follows:
     * <ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
     *   xmlns:g="urn:import:**user's package**">
     *  <g:**UserClassName**>Hello!</g:**UserClassName>
     * </ui:UiBinder>
     * Note that depending on the widget that is used, it may be necessary to
     * implement HasHTML instead of HasText.
     */
    public LabWorklistView() {
        initWidget(uiBinder.createAndBindUi(this));
        log.info("LabWorklistView()");
        
        list.setItems(SampleData.getLabWorklists());
        
        
        swipeable.addIronSwipeHandler(new IronSwipeEventHandler() {
            
            @Override
            public void onIronSwipe(IronSwipeEvent event) {
                
                log.info("onIronSwiped! " + event.getNativeEvent().toSource());
                event.preventDefault();
            }
        });
    }

}
